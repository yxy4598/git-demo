import { getCityAll } from "@/services";
import { defineStore } from "pinia";

const useCityStore = defineStore("city", {
  state: () => ({
    allCities: {},

    currentCity: {
      cityId: 45,
      cityName: "广州"
    }
  }),
  actions: {
    async fetchAllCitiesData() {
      const res = await getCityAll();
      this.allCities = res.data.data
    }
  }
})

export default useCityStore