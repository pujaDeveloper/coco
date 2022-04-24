// import { observable, action, computed, decorate } from "mobx";

// class Store {
//      value = ""
  
//     // constructor (value) {
//     //   this.value = value
//     // }
//     setData = (value) => {
//         this.value = value;
//       };
//   }

//   decorate(Store, {
//     value: observable,
//     setData :action
//   });
  
// //   export class ListStore {
// //     @observable lists = []
// //     @observable filter = ""
  
// //     @action addList = (value) => {
// //       this.lists.push(new List(value))
// //     }
   
// //     @action deleteList = (list) => {
// //       this.lists = this.lists.filter(t => t !== list)
// //     }
  
// //     @computed get filteredLists () {
// //       const matchCase = new RegExp(this.filter, "i")
// //       return this.lists.filter(list=> !this.filter || matchCase.test(list.value))
// //     }
// //   }

// export default new Store();