import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);



const store = new Vuex.Store({
  state: {
    ScriptID:-1,
    PartID:-1,
    ShowEnit:false,
    ShowDBCMainTwo:false
  },
  mutations: {
    // 存储SCRPIT ID
    SCRIPT_ID(state,data){
      state.ScriptID = data;
    },
    //存储PART  ID
    PART_ID(state,id){
      state.PartID = id;
    },
    //控制添加脚本显示隐藏
    SHOWENIT_HIDE(state,showEnit){
      state.ShowEnit = showEnit;
    },
    //控制DBCMain的显示与隐藏
    SHOWDBC_MAINTWO(state,showDBC){
      state.ShowDBCMainTwo = showDBC;
    }
  },

  action:{

  }

});

export default store
