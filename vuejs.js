const App = {
    data(){
        return{
            titlestr : 'Название товара',
            datestr :'Дата приема товара',
            pricestr:'Количество (шт)',
            numberstr:'Цена за единицу товара (тг)',
            sum : 0,
            titles:[],
            dates:[],
            prices:[],
            numbers:[],
            inputValueT:'',
            inputValueD:'',
            inputValueP:'',
            inputValueN:''
        }
    },
    methods:{
        inputChangeHandler(event){
            this.inputValueT = event.target.value
            this.inputValueD = event.target.value
            this.inputValueP = event.target.value
            this.inputValueN = event.target.value

        },
        addNewProduct(){
            this.titles.push(this.inputValueT)
            this.dates.push(this.inputValueD)
            this.prices.push(this.inputValueP)
            this.numbers.push(this.inputValueN)
            this.sum += (this.inputValueN) * (this.inputValueP)

        },
        removeProduct(i , event){
            this.titles.splice(i,1)
            this.dates.splice(i,1)
            this.prices.splice(i,1)
            this.numbers.splice(i,1)
            
        }

    }
}

Vue.createApp(App).mount('#app')