<template>
  <div class="cartForm">
  <form>
      <div>
          <div class="label"><label> Name</label></div> 
      <input 
        id="name"
        type="text"
        
      /> 
      <div class="label">
      <label> Email </label></div>
      <input
        id="email"
        type="text"
      /></div>
<div>
<div class="label">
<label> Adress</label>
</div>

      <input
        id="street"
        type="text"
      />

<div class="label">
<label> Number</label>
</div>

      <input
        id="zip"
        type="numbers"
      /> </div>
<div>
    <div class="label">
    <label> Cardnumber</label>
    </div>
    
      <input
        id="city"
        type="text"
      /></div>

      <div>
          <div class="label">
          <label > CVV</label></div> 
        <input
        id="cvv"
        type="numbers"
      /> </div>
      <!-- <div class="label"> -->
      <label> Month</label>
      <!-- </div> -->
      <select>
                    <option value="01">January</option>
                    <option value="02">February </option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>
                <!-- <div class="label"> -->
                <label> Year</label>
                <!-- </div> -->
                <select>
                    <option value="16"> 2021</option>
                    <option value="17"> 2022</option>
                    <option value="18"> 2023</option>
                    <option value="19"> 2024</option>
                    <option value="20"> 2025</option>
                    <option value="21"> 2026</option>
                </select>
      
     
    </form>


  </div>
</template>

<script>
export default {
props: {
    item: {
      type: Object,
    },
}
}
</script>

<style scoped>
.cartForm {
    float: right;
    display: flex;
    flex-direction: column;
  justify-content: space-around;
  width: 100%;
}

.label {
   margin-bottom: 5px;
}

input {
    margin-bottom: 10px;
    width: 50%;
    height: 20px;
    border-radius: 2px;
    border-style:groove;
}

select {
    margin-left: 10px;
    margin-right: 10px;
}
</style>