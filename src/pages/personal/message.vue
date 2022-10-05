<template>
  <div class="message">
      <div class="personMsg">
        <personMsg/>
      </div>
      <div class="locationMsg">
        <locationMsg/>
      </div>
  </div>
</template>

<script>
import personMsg from "../../components/personal/personMsg.vue"
import locationMsg from "../../components/personal/locationMsg.vue"
import Location from '@/components/accounts/location.vue';
export default {
  components:{
    personMsg,
    locationMsg,
    Location
  },
  data(){
    return{
      
    }
  },
  methods: {
    
  },
};
</script>

<style lang="less" scoped>

.message {
  width: 1255px;
  height: 670px;
  border-radius: 20px;
  padding: 20px 100px;
  margin: 40px auto;
  background-color: #c3dbff;
}
.personMsg,
.locationMsg{
  width: 100%;
  border: solid white 1px;
  background-color: white;
}

</style>