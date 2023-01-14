<template>
    <main>
    <div class="container">
<div class="row justify-content-center cardContainer" v-for="item in experience" :key="item">
    <div class="card mt-4 col-12
    cardContainer." :class="item.class" >
    <div class="card-body border-5">
      <h5 class=" cards card-title">{{ item.date }}</h5>
      <img :src="item.image" width="500" height="500">
      <h4>{{ item.name }}</h4>
      <p>{{ item.experience }}</p>
    </div>
</div>
<div class="col-6"></div>

</div>
</div>



</main>
</template>
<script>
export default {
    data(){
    return {
      experience: [
        {
            id:1,
            class: "cardLeft",
            name:"South Peninsula High School",
            image:"https://i.postimg.cc/sX45PgQS/Redeisgn-Header-2021-1.webp",
            date:"Jan 2016-Dec 2020",
            experience:"Finished Grade 12"
        },

        {id:2,
            class: "cardRight ms-auto",
            name:"Jade's Tavern",
            image:"https://i.postimg.cc/J4KGL726/jt-logo-1.png",
            date:"Jan 2021-Oct 2021",
            experience:"Communicated issues that needed to be immediately addressed with supervisor for quick resolution. Took online orders from the following food apps: MrD, Uber and Bolt. Took telephonic and walk-in orders from customers. Did cash-up every night when working. Assisted the kitchen where i could and helped clean when needed."
            },
        {id:3,
            class: "cardLeft",
            name:"Checkers",
            image:"https://i.postimg.cc/hP8t04n4/checkers-hover-mini.png",
            date:"Apr 2022-May 2022",
            experience:"Offered friendly and efficient service to customers, handled challenging situations with ease. Demonstrated respect, friendliness and willingness to help wherever needed. Adhered to social distancing protocols and wore mask or face shield. Actively listened to customers, handled concerns quickly and escalated major issues to supervisor. Learned new skills and applied to daily tasks to improve efficiency and productivity. Duties included: packing groceries in bags at till points, assisting customers with their groceries into their trolleys, collecting stock from dispatch area, packing items correctly and neatly on the shelves and assisting customers when they're looking for specific things in the store."
        },
        {id:4,
            class: "cardRight ms-auto",
            name:"BDO",
            image:"https://i.postimg.cc/HnD641D5/BDO-logo-150dpi-RGB-290709.webp",
            date:"Jun 2022-Aug 2022",
            experience:"Adapted to workflow changes and implemented continuous process improvements to overcome obstacles. Scanned in confidential documents and threw the hard copies away to be shredded. Had to save files on a drive to make sure people could access it. Had to write out inventory lists and then type it on the PC to store information."
},
        {id:5,
            class: "cardLeft",
            name:"Life Choices Academy",
            image:"https://i.postimg.cc/DyKBDhWY/images.png",
            date:"Sept 2022-Current",
            experience:"Learning various coding languages and doing projects after each module to test my knowledge."}
    ]

    }
}
}
        
</script>
<style scoped>
img {
    width: 50% ;
    height: auto;
}
.cardContainer{
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
}
.cardLeft{
    grid-column: 1/2;
}
.cardRight{
    grid-column: 2/3;
}

    
</style>