<template>
  <div class="cartForm">
  <form>
      <div>
          <label> Name</label> <br>
      <input 
        id="name"
        type="text"
        
      /> <br>
      <label> Email </label><br>
      <input
        id="email"
        type="text"
      /></div>
<div>

<label> Adress</label>
<br>
      <input
        id="street"
        type="text"
      />
<br>
<label> Number</label>
<br>
      <input
        id="zip"
        type="numbers"
      /> </div>
<div>
    <label> Cardnumber</label>
    <br>
      <input
        id="city"
        type="text"
      /></div>
      <div><label > CVV</label> <br>
        <input
        id="cvv"
        type="numbers"
      /> </div><br>
      <label> Month</label>
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
                <label> Year</label>
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

<style>
.cartForm {
    float: right;
    display: flex;
    flex-direction: column;
  justify-content: space-around;
  width: 100%;
}


</style>