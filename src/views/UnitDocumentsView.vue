<script setup>
import Navbar from "../components/Navbar.vue";
import { useRoute } from "vue-router";
import { onMounted, ref, watch } from "vue";
import { getApi } from "../api/endpoint";
import axios from "axios";
import { RouterLink } from "vue-router";
import BigLoader from "../components/BigLoader.vue";
import Footer from "../components/Footer.vue";
// import { listenerCount } from "process";

// state
const route = useRoute();
const documents = ref([]);
const documentRefs = ref([]);
const isDocumentsLoading = ref(false)
const errorMessages = ref(null)

const progress_value = ref(0)
const progress_ref = ref(null)

const progress_container_ref = ref(null)


const getFileName = (url_str) => {
  const urlObject = new URL(url_str);
  const filename = urlObject.pathname.split("/").pop();
  return filename;
};

const getUnitDocumentsApi = () => {
  const url = "/core/unit_documents_filter";
  return getApi.get(url, {
    params: {
      year_id: route.params.year_id,
      course_id: route.params.course_id,
      semester_name_id: route.params.semester_name_id,
      course_type_id: route.params.course_type_id,
      unit_id: route.params.unit_id,
    },
  });
};


onMounted(() => {
  if (progress_ref.value != null) {
    progress_ref.value.style.width = "0"
  }
  // call get unitDocumentsApi
  isDocumentsLoading.value = true
  getUnitDocumentsApi()
    .then((response) => {
      console.log(response.data);
      documents.value = response.data;
      isDocumentsLoading.value = false
    })
    .catch((error) => {
      // check whether error is from network or backend
      if (error.code == "ERR_NETWORK") {
        console.log("Network Error");
        errorMessages.value = "Network Error"
        //   show_popup_error(toast, "Cannot Connect to the server", "Network Error")
      } else {
        // error from the backend
        if (error.response) {
          const error_data = error.response.data;
          console.log(error_data);
          errorMessages.value = error_data
        }
        //   show_popup_error(toast, "Error Loading Carousel", "Error")
      }
      // stop_loader(is_loading)
      isDocumentsLoading.value = false

    });
});

watch([progress_value], (value) => {
  if (progress_ref.value != null) {
    progress_ref.value.style.width = `${value}%`
  }
})

const getFileApi = (file_url) => {
  return getApi.get(file_url, {
    responseType: "blob",
    onDownloadProgress: (progressEvent) => {
      progress_value.value = parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total))
      console.log(progress_value.value)
      // console.log(parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total))) 
    },
  });
}

const startDownload = (doc) => {
  console.log(doc)
  progress_value.value = 0
  const file_url = doc.document;

  isDocumentsLoading.value = true
  getFileApi(file_url)
    .then((response) => {
      console.log(response.data);
      const file = response.data;
      const link = document.createElement("a");
      link.href = URL.createObjectURL(file);
      link.download = getFileName(file_url);
      console.log(link)
      document.body.appendChild(link)
      link.click()
      URL.revokeObjectURL(link.href)
      isDocumentsLoading.value = false
    })
    .catch((error) => {
      // check whether error is from network or backend
      if (error.code == "ERR_NETWORK") {
        console.log("Network Error");
        errorMessages.value = "Network Error"
        // show_popup_error(toast, "Cannot Connect to the server", "Network Error")
      } else {
        // error from the backend
        const error_data = error.response.data;
        console.log(error_data);
        errorMessages.value = error_data
        // show_popup_error(toast, "Error Loading Carousel", "Error")
      }
      // stop_loader(is_loading)
      isDocumentsLoading.value = false
    });
}

const downloadFile = async (doc) => {
  progress_container_ref.value.style.visibility = `visible`
  console.log(progress_container_ref.value.style.visibility)
  startDownload(doc)
};
</script>

<template>
  <div class="units_container">
    <Navbar />

    <div class="units_wrapper">
      <div class="back_btn">
        <RouterLink to="/"> Back </RouterLink>
      </div>
      <div class="document_container">

        <div class="progress" ref="progress_container_ref">
          <p>Downloading File ...</p>
          <div class="progress-container">
            <div class="skill php" ref="progress_ref">{{ progress_value }}%</div>
          </div>
        </div>


        <div class="big_loader_cont" v-if="isDocumentsLoading">
          <BigLoader />
        </div>

        <ol class="documents_list" v-else>
          <!-- ADDED A KEY -->
          <li v-for="doc in documents" :key="doc.id" @click.prevent="downloadFile(doc)">
            <a href="#">{{ getFileName(doc.document) }} </a>
          </li>
        </ol>

        <div class="errorMessages" v-if="errorMessages">
          {{ errorMessages }}
        </div>

        <div class="footer_cont">

          <Footer />
        </div>


      </div>
    </div>
  </div>
</template>

<style scoped>
.footer_cont {
  display: none;
}

.big_loader_cont {
  position: absolute;
  top: 0%;
  left: 0%;
}

.progress {

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  visibility: hidden;
  /* visibility: visible !important; */

}

.progress-container {
  background-color: var(--gray-background);
  padding: .2rem;
  width: 80%;
  border-radius: 15px;
}

.skill {

  background-color: var(--dim-dark-background);
  color: var(--light-text);

  padding: 1%;
  text-align: right;
  font-size: 20px;
  border-radius: 15px;

}

.html {
  width: 80%;
}

.php {
  width: 0%;
}


/* SMAL DEVICES */
@media only screen and (max-width: 768px) and (min-width: 280px) {
  .footer_cont {
    display: contents;
  }

  .big_loader_cont {
    position: absolute;
    top: 0%;
    left: 0%;

  }

  .document_container {
    position: relative !important;
  }

  .units_wrapper {
    position: relative !important;
    /* background: lime; */
  }

  .back_btn {
    position: absolute;
    top: 0%;
    margin: 12px auto !important;
  }

  .documents_list {
    position: relative !important;
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .documents_list li {
    width: 50% !important;
    flex: 1 0 40%;
    font-size: 12px;
  }

  .documents_list li a {
    text-decoration: none;
  }

  /* .footer_cont {
    position: absolute;
    width: 100%;
    top: 94%;
  } */
}

/* LARGE DEVICES */
.units_wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 78vh;
  /* position: relative; */
}

.document_container {
  height: 80vh;
  padding: 8px 12px;
  width: 86%;
  /* position: relative; */
}

.back_btn {
  margin: 12px auto;
  width: 85%;
  padding: 10px 20px;
}

.back_btn a {
  text-decoration: none;
  color: var(--light-text);
  background: var(--dim-dark-background);
  padding: 8px 18px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
}

.documents_list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  margin: auto;
  padding: 8px 16px;
}

.documents_list li {
  background: var(--dark-background);
  display: flex;
  padding: 0 8px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 100px;
  color: var(--light-text);
  width: 180px;
  border-radius: 4px;
  overflow: hidden;
}

.documents_list li:hover {
  background: var(--extra-dark-color);
}

.documents_list a {
  text-decoration: none;
  color: var(--light-text);
  background: transparent;
}
</style>
