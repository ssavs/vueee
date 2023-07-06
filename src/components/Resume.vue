<template>
    <main>
        <div class="container">
            <div class="row justify-content-center cardContainer" v-for="item in experience" :key="item">
                <div class="card mt-4 col-12
    cardContainer." :class="item.class">
                    <div class="card-body border-5">
                        <h4>{{ item.name }}</h4>
                        <h5 class=" cards card-title">{{ item.date }}</h5>
                        <!-- <img :src="item.image" width="300" height="500"> -->
                        
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
    data() {
        return {
            experience: [
                {
                    id: 1,
                    class: "cardLeft",
                    name: "South Peninsula High School",
                    image: "https://i.postimg.cc/sX45PgQS/Redeisgn-Header-2021-1.webp",
                    date: "Jan 2016-Dec 2020",
                    experience: "Finished Grade 12"
                },

                {
                    id: 2,
                    class: "cardRight ms-auto",
                    name: "Jade's Tavern",
                    image: "https://i.postimg.cc/J4KGL726/jt-logo-1.png",
                    date: "Jan 2021-Oct 2021",
                    experience: "Took walk-in orders from customers and from various food devices such as : MrD, UberEats and Bolt. I helped package the customers food and assisted in cleaning when I could."
                },
                {
                    id: 3,
                    class: "cardLeft",
                    name: "Checkers",
                    image: "https://i.postimg.cc/hP8t04n4/checkers-hover-mini.png",
                    date: "Apr 2022-May 2022",
                    experience: "Assisted customers with their groceries into their trolleys. Collecting stock from the dispatch area, packing items correctly on the shelves and assisting customers with direction of items they are looking for."
                },
                {
                    id: 4,
                    class: "cardRight ms-auto",
                    name: "BDO",
                    image: "https://i.postimg.cc/HnD641D5/BDO-logo-150dpi-RGB-290709.webp",
                    date: "Jun 2022-Aug 2022",
                    experience: "Scanned confidential documents for clients so that the company could go fully digital with thing. I then had to do inventory of all the documents that I scanned and then had to put the files back into their boxes to get shredded at another company."
                },
                {
                    id: 5,
                    class: "cardLeft",
                    name: "Life Choices Academy",
                    image: "https://i.postimg.cc/DyKBDhWY/images.png",
                    date: "Sept 2022-Current",
                    experience: "Learning various coding languages and doing projects after each module to test my knowledge."
                },
                {
                  id:6,
                  class:"cardRight",
                  name:"Life Choices Studio",
                  date:"Apr-Current",
                  experience:"Learnt how to utilize WordPress, Figma and how to use SEO , did some UI/UX and PHP"
                }
            
            ]

        }
    }
}

</script>
<style scoped>
img {
    width: 50%;
    height: auto;
}

.cardContainer {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    /* background-color: ; */
}

.cardLeft {
    grid-column: 1/2;
    background-color: #E1D9E3;
    margin-bottom: 8%;
}

.cardRight {
    grid-column: 2/3;
    background-color: #E1D9E3;
    margin-bottom: 8%;
}</style>