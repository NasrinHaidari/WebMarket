<template>
    <div class="container mt-5">
        <br>
        <div class="row mt-5">
            <h3>CREATE REVIEW</h3>           
        </div>
        <div class="row mt-5">
            <div class="col-md-2">
                <img src="/images/little princee.jpg" alt="..." class="img-thumbnail">
            </div>
            <div class="col">
                <b style="font-size: 20px;">Little Perince</b>
            </div>              
        </div>
        <hr>
        <div class="row"> 
            <div class="col">   
                <form>
                    <div class="row">
                        <b style="font-size: 20px;">Overall Rating</b>
                        <div class="row mt-5">
                            
                            <starRating/>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-9">
                            <b style="font-size: 20px;">Add photo or video</b>

                            <div class="form-group">
                                <label for="exampleInputEmail1">Shoppers find images and videos more helpful than text alone.</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <hr>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-9">
                            <b style="font-size: 20px;">Add a heading</b>
                            <div class="form-group">
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="What's most important to know?">
                            </div>
                        </div>
                    </div>


                    
                    <div class="row mb-4">
                        
                        <div class="col">
                            <b style="font-size: 20px;">Write you review</b>
                            <div class="form-group">
                            <textarea type="email" class="form-control" id="exampleFormControlTextarea1" aria-describedby="emailHelp" placeholder="What do you like or dislike? What did you see this product for?" rows="3"></textarea>
                            </div>
                        </div>
                    </div>

                    <hr>

                    <div class="row mt-5">
                        <div class="col">
                            
                            <b style="font-size: 15px;">This is how you'll appear to other customers.</b>
                        </div>
                    </div>
                    
                    <div class="row mt-5">
                        <div class="col-1">
                            <img src="/images/admin.png" alt="..." class="img-thumbnail">
                        </div>

                        <div class="col">
                            <div class="form-group">
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nasrin">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <small id="emailHelp" class="form-text text-muted">Don't worry, you always change this on your profile .</small>
                        </div>
                    </div>
                    <br>
                    <div class="row mb-5">
                        <div class="col-4 pl-2 pl-md-5 align-items-center">
                            <button class="custom-bg-orange px-4 py-1 mt-1 custom-btn">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import starRating from 'vue-star-rating'

export default {
    layout: "pageDeafult",
    components:{
        starRating
  }
}
</script>

<style lang="scss" scoped>

</style>