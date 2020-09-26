;
//创建组件

let topBannerCpn = Vue.extend({
    template: '#topBannerTemp',
    data:function () {
        return {
            dist:0
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll () {
            this.dist = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            // var searchTop = document.querySelector('#searchBar').offsetTop
            // console.log(searchTop)
            if (this.dist > 20 ) {
                $(".topBannerTemp").addClass("fixed-top");
                $("#infoBar").css("display","none");

            } else {
                $(".topBannerTemp").removeClass("fixed-top");
                $("#infoBar").css("display","block");

            }
            // console.log(scrollTop,offsetTop)
        },
    }

});

let mainCpn = Vue.extend({
    template:'#mainTemp'
});

let typeCpn = Vue.extend({
    template:'#typeTemp',
});

let reCpn = Vue.extend({
    template:'#reTemp'
});

let goTopCpn = Vue.extend({
    template:'#goTopTemp',
    data:function () {
        return{
            topDistance:0
        };
    },
    mounted(){
        window.addEventListener('scroll',this.getTopDistance);
    },
    methods:{
        getTopDistance:function () {
            this.topDistance = document.documentElement.scrollTop||document.body.scrollTop||window.pageYOffset
        },
        gotop:function () {
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
            window.pageYOffset = 0;
        }
    }
});
let mouCpn = Vue.extend({
    template:'#mouTemp',
});
let homeCpn = Vue.extend({
    template:'#homeTemp',
});

let shopinfoCpn = Vue.extend({
    template:'#shopinfoTemp',
});
let advertisingCpn=Vue.extend({
    template:'#advertisingTemp',
});
let loginCpn = Vue.extend({
    template:'#loginTemp',
});
let registerCpn = Vue.extend({
    template:'#registerTemp',
});
let orderList = Vue.extend({
    template:'#orderTemp',
    data:function(){
        return {
            isShow:false
        };
    },

});
let payOnline = Vue.extend({
    template:'#payTemp',
    data:function(){
        return {
           isShow:false
        };
    },
});
let myeatCpn = Vue.extend({
    template:'#myeatTemp',
});
let shopmessageList = Vue.extend({
    template:'#shopmessageTemp',
});

//注册
let mainnavcpn = Vue.component('mainnavcpn',mainCpn)
let gotopcpn = Vue.component('gotopcpn',goTopCpn)
let topBannercpn = Vue.component('topbannercpn',topBannerCpn)
let typecpn = Vue.component('typecpn',typeCpn);
let moucpn = Vue.component('moucpn',mouCpn);
let homecpn = Vue.component('homecpn',homeCpn);
let recpn = Vue.component('recommcpn',reCpn);
let shopinfocpn = Vue.component('shopinfocnp',shopinfoCpn)
let advertisingcpn=Vue.component('advertisingcpn',advertisingCpn)
let logincpn=Vue.component('logincpn',loginCpn);
let registercpn=Vue.component('registercpn',registerCpn);
let orderlist = Vue.component('orderlist',orderList);
let payonline = Vue.component('payonline',payOnline);
let myeatcpn = Vue.component('myeatcpn',myeatCpn );
let shopmessagelist = Vue.component('shopmessagelist',shopmessageList);

//配置路由
let routers = [
    {path:'/mou',component: moucpn},
    {path:'/home',component: homecpn},
    {path:'/',component: homecpn},
    {path:'/shop',component: shopinfocpn},
    {path:'/login',component: logincpn},
    {path:'/register',component: registercpn},
    {path:'/odlist',component:orderList },
    {path:'/payonline',component:payOnline},
	{path:'/smlist',component:shopmessageList },

];
//生成路由实例
let myrouter = new VueRouter({
    routes:routers
});


const vm = new Vue({
    el:"#app",
    data:{
        foodCategory:[],
        recommendMerchant:[],
        bLists:[],
		sLists:[],
        payshopinfo:[]
    },
    router:myrouter,
    mounted(){
        this.$http.get("json/shop.json").then(
            function (res) {
                console.log(res.body.dataZone)
                this.foodCategory = res.body.dataZone.foodCategory;
                this.recommendMerchant=res.body.dataZone.recommendMerchant;
                this.bLists = res.body.dataZone.blists;
				this.sLists=res.body.dataZone.lists;
                this.payshopinfo = res.body.dataZone.payshopinfo;
            }
        )
    }
});

//jQuery实现回到顶部
// $(window).ready(function () {
//     $(window).scroll(function () {
//         $(window).scrollTop();
//     });
// });


