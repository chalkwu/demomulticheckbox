<template>
    <div>
        个人信息
        <br>
        <el-dropdown>
  <span class="el-dropdown-link">
    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <br>
        <el-select placeholder="全部" v-model="selectedArray" size="small" multiple width="220px" @change='changeSelect'>
        <!--<el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="selectParam" size="mini" @change="search"></el-input>-->
        <el-option :label='all.label' :value='all.value' @click.native='selectAll'>
        <input type="checkbox" :checked="selectedArray.includes(all.value)">{{all.label}}
        </el-option>
        <el-option v-for="items in cities" :key="items.value" :label="items.label" :value="items.value">
        <input type="checkbox" :label="items.label" :checked="selectedArray.includes(items.value)">{{items.label}}
        </el-option>
        </el-select>{{selectedArray}}

    </div>
</template>

<script>
    export default {
        name: "Profile",
        data (){
            return {
                selectParam:'',
                isChecked:false,
                all:{
                    value:'all',
                    label:'全部'
                },
                cities:[
                    {
                        value:'Beijing',
                        label:'北京'
                    },
                    {
                        value:'Shanghai',
                        label:'上海'
                    },
                    {
                        value:'Nanjing',
                        label:'南京'
                    },
                    {
                        value:'Chengdu',
                        label:'成都'
                    },
                    {
                        value:'Shenzhen',
                        label:'深圳'

                    },
                    {
                        value:'Guangzhou',
                        label:'广州'

                    }
                ],
                selectedArray:[]
            }
        },
        methods: {
            selectAll() {
                if (this.selectedArray.length < this.cities.length) {
                    this.selectedArray = [];
                    this.cities.map((item) => {
                        this.selectedArray.push(item.value)
                    });
                    console.log( 'kankan'+ this.selectedArray)
                    // this.selectedArray.unshift(this.all.value);
                } else {
                    this.selectedArray = [];
                }
            },
            changeSelect(val) {
                if (!val.includes(this.all.value) && val.length === this.cities.length) {
                    this.selectedArray.unshift(this.all.value);
                } else if (val.includes(this.all.value) && (val.length - 1) < this.cities.length) {
                    this.selectedArray = this.selectedArray.filter((item) => {
                        return item != this.all.value;
                    })
                }
            },
            search() {
                this.cities = this.cities.filter(item => item.label.indexOf(this.selectParam) > -1);
            }
        }
    }
</script>

<style scoped>

</style>