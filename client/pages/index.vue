<template>
    <div class="container">
      <!-- Feature product section -->
      <featureProductVue/>
      <!-- Best seller section -->
      <h4 class="mt-5 d-inline-block px-3 py-1 rounded custom-bg-orange">Best Seller</h4>
      <div class="row">
        <div class="col-md-4 pb-4" v-for="product in products" :key="product._id">
          <div class="card">
            <div class="card-img-top" style="height:300px; overflow:hidden;">
               <img src="/images/book2.jpg" alt="..." width="100%">
            </div>
            <div class="card-body">
              <div class="row">
                <h5 class="col card-title"><a href="" class="pr-3">{{ product.title }}</a></h5>
                <span class="col-4">Aug 18, 2020</span>
              </div>
              <p>by<a href="#">{{ product.owner.name }}</a></p>
              <div class="row">
                <p class="col">${{ product.price }}</p>
                <a href="#" class="col-2 btn custom-bg-orange">cart</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import featureProductVue from '../components/featureProduct.vue'

export default {
  components: {
    featureProductVue
  },
  async asyncData({$axios}) {
    const productResponse = await $axios.$get('http://localhost:3000/api/products')
    // console.log(productResponse.products)

    return{
      products: productResponse.products
    }
  }
}
</script>

<style>
</style>