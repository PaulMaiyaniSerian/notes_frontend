<script setup>
import UnitParent from "../components/UnitParent.vue";
import Navbar from "../components/Navbar.vue";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import { getApi } from "../api/endpoint";
import axios from "axios";
import { RouterLink } from "vue-router";
import { listenerCount } from "process";

// state
const route = useRoute();
const documents = ref([]);
const documentRefs = ref([]);

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
  // call get unitDocumentsApi
  getUnitDocumentsApi()
    .then((response) => {
      console.log(response.data);
      documents.value = response.data;
    })
    .catch((error) => {
      // check whether error is from network or backend
      if (error.code == "ERR_NETWORK") {
        console.log("Network Error");
        //   show_popup_error(toast, "Cannot Connect to the server", "Network Error")
      } else {
        // error from the backend
        const error_data = error.response.data;
        console.log(error_data);
        //   show_popup_error(toast, "Error Loading Carousel", "Error")
      }
      // stop_loader(is_loading)
    });
});

const downloadFile = async (doc) => {
  const file_url = doc.document;
  const item_ref = documentRefs.value.find((value) => {
    if (value.attributes.data_key.value == doc.id) {
      console.log("found");
      return true;
    }
  });

  const response = await axios.get(file_url, {
    responseType: "blob",
  });

  const file = response.data;

  const link = document.createElement("a");

  link.href = URL.createObjectURL(file);

  link.download = getFileName(file_url);

  link.click();
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
        <ol class="documents_list">
          <li v-for="document in documents" :key="document.id" @click.prevent="downloadFile(document)">
            <a>{{ getFileName(document.document) }} </a>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* SMAL DEVICES */
@media only screen and (max-width: 768px) and (min-width: 320px) {
  .document_container {
    position: relative !important;
  }
  .back_btn {
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
  .footer_cont {
    position: absolute;
    width: 100%;
    top: 94%;
  }
}

/* LARGE DEVICES */
.units_wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 78vh;
  position: relative;
}
.document_container {
  height: 80vh;
  padding: 8px 12px;
  width: 86%;
  position: relative;
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
  color: var(--light-text);
  background: transparent;
}
</style>
