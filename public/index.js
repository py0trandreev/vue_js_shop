
Vue.component('product-list', {
    template: `
    <div>
        <div v-for="product in products">
            <h3>{{ product.title }}</h3>
            <p>{{ '₽ ' }}{{ product.price }}</p>
            <button :id="product.id" @click="addToCart(product.id)" >Купить</button>
            <p>--------</p>
        </div>
    </div>
    `,
    data() {
        return {
            products: [
                {
                    "id": 1,
                    "title": "Socks white",
                    "price": 459
                },
                {
                    "id": 2,
                    "title": "Shoes green",
                    "price": 561
                },
                {
                    "id": 3,
                    "title": "Jacket green",
                    "price": 121
                },
                {
                    "id": 4,
                    "title": "Shoes black",
                    "price": 975
                },
                {
                    "id": 5,
                    "title": "Socks green",
                    "price": 392
                },
                {
                    "id": 6,
                    "title": "Shirt red",
                    "price": 146
                },
                {
                    "id": 7,
                    "title": "Shoes orange",
                    "price": 754
                },
                {
                    "id": 8,
                    "title": "Shirt black",
                    "price": 814
                },
                {
                    "id": 9,
                    "title": "Shirt green",
                    "price": 706
                },
                {
                    "id": 10,
                    "title": "Hat red",
                    "price": 242
                },
                {
                    "id": 11,
                    "title": "Shirt green",
                    "price": 604
                },
                {
                    "id": 12,
                    "title": "Hat orange",
                    "price": 153
                },
                {
                    "id": 13,
                    "title": "Shirt red",
                    "price": 792
                },
                {
                    "id": 14,
                    "title": "Socks white",
                    "price": 219
                },
                {
                    "id": 15,
                    "title": "Jacket black",
                    "price": 578
                },
                {
                    "id": 16,
                    "title": "Jacket orange",
                    "price": 598
                },
                {
                    "id": 17,
                    "title": "Shirt orange",
                    "price": 181
                },
                {
                    "id": 18,
                    "title": "Socks white",
                    "price": 704
                },
                {
                    "id": 19,
                    "title": "Jacket red",
                    "price": 773
                },
                {
                    "id": 20,
                    "title": "Hat white",
                    "price": 795
                }
            ]
        };

    },
    methods: {
        addToCart(id) {
            app.cartList.push(this.products[id - 1]);
        }

    }
});


Vue.component('cart-list', {


    template: `
    <div>
        <div v-for="product in products">
            <h3>{{ product.title }}</h3>
            <p >{{ '₽ ' }}{{ product.price }}</p>
            <button :id="product.id" @click="deleteItem" >Удалить</button>
            <p>--------</p>
        </div>
    </div>
    `,
    data() {
        return {
            products: app.cartList
        };
    }

});


Vue.component('cart-content', {
    template: `
    <div>
        <div class="modal">
          <button @click="hideCart">Закрыть</button> 

            <cart-list></cart-list>

        </div>
    </div>
    `,
    methods: {
        hideCart() {
            app.cartIsVisible = false;
        }
    }
});

var app = new Vue({
    el: '#app',
    data: {
        cartIsVisible: false,
        cartList: [

        ]
    },
    methods: {
        showCart() {
            // alert('Cart');
            this.cartIsVisible = true;

        }
    }
});

