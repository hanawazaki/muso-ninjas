<template>
  <div class="home">
    <ListView :playlists="getData" />
  </div>
</template>

<script>
import getCollection from "../composables/getCollection";
import { computed } from "vue";
import { formatDistanceToNow } from "date-fns";
import ListView from "../components/ListView.vue";

export default {
  components: { ListView },
  setup() {
    const { error, documents } = getCollection("playlists");

    const getData = computed(() => {
      if (documents.value) {
        return documents.value.map((doc) => {
          let time = formatDistanceToNow(doc.createdAt.toDate());
          return { ...doc, createdAt: time };
        });
      }
    });
    return { error, documents, getData, formatDistanceToNow };
  },
};
</script>
