import { useEffect, useState } from "react";
import { StyleSheet, Text, View,Image, TouchableOpacity,TextInput, ScrollView, Modal, ActivityIndicator } from "react-native";
import { Component } from "react/cjs/react.production.min";


export default class Landing extends Component {
    constructor(){
 
        super();
     
        this.state={
          modalVisible: false,
          loading: false,
        }
     
      }
  
    
 render(){
  return (
  
   <View style={styles.container}>
       <View style={styles.header}>
         <View style={styles.name}>
           <Text style={styles.nametext}>Hello Rakib!</Text>
         </View>
         <View style={styles.avatar}>
         <Image
        style={styles.profpic}
        source={require('../assets/pi-modified.png')}
      />
         </View>
       </View>
       <Modal visible={this.state.modalVisible}
       style={styles.modal}
       transparent={true}>
         <View style={styles.balance}>
         <ActivityIndicator size="large" style={styles.activity} animating={this.state.loading} hidesWhenStopped={true} />
           <TouchableOpacity style={styles.close} onPress={() => { this.setState({ modalVisible:false }) }}>
             <Text style={styles.closetext}>Close</Text>
           </TouchableOpacity>
           {!this.state.loading &&
           <Text style={styles.balmain}>Balance</Text>}
           {!this.state.loading &&
           <Text style={styles.balsub}>$25400.75</Text>}
         </View>
        </Modal>
      <TouchableOpacity style={styles.cardclick} onPress={() => { this.setState({ modalVisible:true })
    this.setState({loading:true})
    setTimeout(() => {
      this.setState({loading:false})
    }, 2000);
    }}>
       <Image
        style={styles.cardpic}
        source={require('../assets/cardd.png')}
      />
      </TouchableOpacity>
       <View style={styles.catg}>
         <View style={styles.catname}>
         <Text style={styles.cattext}>Categories</Text>
         </View>
       </View>
       <View style={styles.choices}>
         <TouchableOpacity style={styles.choice}>
           <View style={styles.img}>
           <Image
        style={styles.itempic}
        source={require('../assets/Item1.png')}
          />
           </View>
           <View style={styles.key}>
           <Text style={styles.chtext}>Send</Text>
           </View>
         </TouchableOpacity>
         <TouchableOpacity style={styles.choice}>
           <View style={styles.img}>
           <Image
        style={styles.itempic}
        source={require('../assets/Item2.png')}
          />
           </View>
           <View style={styles.key}>
           <Text style={styles.chtext}>Bill</Text>
           </View>
         </TouchableOpacity>
         <TouchableOpacity style={styles.choice}>
           <View style={styles.img}>
           <Image
        style={styles.itempic}
        source={require('../assets/Item3.png')}
          />
           </View>
           <View style={styles.key}>
           <Text style={styles.chtext}>Grocery</Text>
           </View>
         </TouchableOpacity>
         <TouchableOpacity style={styles.choice}>
           <View style={styles.img}>
           <Image
        style={styles.itempic}
        source={require('../assets/Item4.png')}
          />
           </View>
           <View style={styles.key}>
           <Text style={styles.chtext}>More</Text>
           </View>
         </TouchableOpacity>
       </View>
       <View style={styles.tranhead}>
         <View style={styles.tranname}>
           <Text style={styles.cattext}>Transactions</Text>
           </View>
         <View style={styles.transee}>
          <TouchableOpacity>
         <Text style={styles.seetext}>See All</Text>
        </TouchableOpacity>
         </View>
       </View>
       <ScrollView style={styles.scroll}>
       <View style={styles.item}>
       <View style={styles.comppic}>
       <Image
        style={styles.profpic}
        source={require('../assets/udem-modified.png')}
      />
         </View>
         <View style={styles.trancomp}>
         <Text style={styles.trantext}>Udemy Course</Text>
         </View>
         <View style={styles.transub}>
         <Text style={styles.subtext}>15th Jan 2021</Text>
         </View>
         <View style={styles.tranamt}>
         <Text style={styles.amttext}>$90.25</Text>
         </View>
       </View>
       <View style={styles.item}>
       <View style={styles.comppic}>
       <Image
        style={styles.profpic}
        source={require('../assets/uip-modified.png')}
      />
         </View>
         <View style={styles.trancomp}>
         <Text style={styles.trantext}>Michelle Johnson</Text>
         </View>
         <View style={styles.transub}>
         <Text style={styles.subtext}>9th Jan 2021</Text>
         </View>
         <View style={styles.tranamt}>
         <Text style={styles.amttext}>$270.25</Text></View> 
       </View>
       <View style={styles.item}>
       <View style={styles.comppic}>
       <Image
        style={styles.profpic}
        source={require('../assets/ama-modified.png')}
      />
         </View>
         <View style={styles.trancomp}>
         <Text style={styles.trantext}>Amazon Prime</Text>
         </View>
         <View style={styles.transub}>
         <Text style={styles.subtext}>8th Jan 2021</Text>
         </View>
         <View style={styles.tranamt}>
         <Text style={styles.amttext}>$170.50</Text>
         </View>
       </View>
       <View style={styles.item}>
       <View style={styles.comppic}>
       <Image
        style={styles.profpic}
        source={require('../assets/netf-modified.png')}
      />
         </View>
         <View style={styles.trancomp}>
         <Text style={styles.trantext}>Netflix Monthly</Text>
         </View>
         <View style={styles.transub}>
         <Text style={styles.subtext}>4th Jan 2021</Text>
         </View>
         <View style={styles.tranamt}>
         <Text style={styles.amttext}>$195.25</Text></View> 
       </View>
       </ScrollView>
       <Image
        style={styles.subpic}
        source={require('../assets/Subtract.png')}
      />
      <TouchableOpacity style={styles.central}>
      <Image
        style={styles.curpic}
        source={require('../assets/cursor.png')}
      />
      </TouchableOpacity>
      <View style = {styles.left}>
      <TouchableOpacity style={styles.icon}>
      <Image
        style={styles.iconpic}
        source={require('../assets/Hm.png')}
      />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon}>
      <Image
        style={styles.iconpic}
        source={require('../assets/An.png')}
      />
      </TouchableOpacity>
      </View>
      <View style = {styles.right}>
      <TouchableOpacity style={styles.icon}>
      <Image
        style={styles.iconpic}
        source={require('../assets/sms.png')}
      />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon}>
      <Image
        style={styles.iconpic}
        source={require('../assets/settings.png')}
      />
      </TouchableOpacity>
      </View>
   </View>
  );
 }
}

const styles = StyleSheet.create({
  container: {
    display:"flex",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  header: {
    display: "flex",
    width: "95%",
    aspectRatio: 5,
    marginTop: "11%",
    justifyContent: "center"
  },
  card: {
    display: "flex",
    justifyContent: "center",
    width: "95%",
    aspectRatio: 2.2,
    marginTop: "1 %",
    alignItems: "center",
    justifyContent: "center"
  },
  name: {
    display: "flex",
    width: "50%",
    height: "80%",
    marginLeft: "0%",
    justifyContent:"center",
    alignItems:"center"
  },
  avatar: {
    position: "absolute",
    display: "flex",
    width: "15%",
    aspectRatio: 1,
    marginLeft: "78%",
    alignItems: "center",
    justifyContent: "center"
  },
  catg: {
    display: "flex",
    width: "95%",
    aspectRatio : 7,
    marginTop: "-3%",
    justifyContent: "center"
  },
  catname: {
    display: "flex",
    width: "50%",
    height: "80%",
    marginLeft: "2%",
    justifyContent: "center",
    
  },
  choices: {
    display:"flex",
    flexDirection: "row",
    width: "95%",
    aspectRatio: 3.8,
    marginTop: "3%",
    justifyContent: "space-around",
    alignContent: "center",
  },
  choice: {
    display: "flex",
    width: "22%",
    height: "100%",
  },
  img: {
    display: "flex",
    width: "100%",
    height: "70%",
    justifyContent: "center",
    alignItems: "center",
  },
  key: {
    display: "flex",
    width: "100%",
    height: "30%",
    justifyContent: "center",
    alignItems : "center"
  },
  tranhead: {
    display: "flex",
    width: "95%",
    aspectRatio: 7,
    marginTop: "3%",
    justifyContent: "center"
  },
  tranname: {
    display: "flex",
    width: "50%",
    height: "80%",
    marginLeft: "2%"
  },
  transee: {
    position: "absolute",
    display: "flex",
    width: "20%",
    height: "80%",
    marginLeft: "74%",
    justifyContent: "center",
    alignItems: "center"
  },
  item: {
    display: "flex",
    width: "95%",
    aspectRatio: 6,
    marginTop: "2%",
    justifyContent:"center"
  },
  nametext: { 
    display:"flex",
    fontSize: 25,
    fontWeight: "bold",
  },
  profpic:{
    height: "100%",
    aspectRatio: 1
  },
  cardpic: {
    resizeMode: "contain",
    height: "100%"
  },
  cattext: { 
    display:"flex",
    fontSize: 22,
    fontWeight: "bold",
  },
  chtext: { 
    fontSize : 15,
    fontWeight: "500",
    color: "black"
  },
  itempic:{
    resizeMode: "contain",
    height: "60%"
  },
  seetext: {
    fontSize: 14,
    color: "orange",
    fontWeight: "600"
  },
  comppic: {
    position: "absolute",
    display: "flex",
    width: "15%",
    height: "100%",
    marginLeft: "2%",
    alignItems: "center",
    justifyContent: "center",
  },
  trancomp:{
    display: "flex",
    width: "45%",
    height: "50%",
    marginLeft: "22%",
  },
  transub:{
    display: "flex",
    width: "45%",
    height: "50%",
    marginLeft: "22%",
  },
  tranamt: {
    position: "absolute",
    display: "flex",
    width: "30%",
    height: "70%",
    marginLeft: "70%",
    justifyContent: "center",
    alignItems: "center"
  },
  trantext:{ 
    display:"flex",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: "5%"
  },
  amttext:{ 
    display:"flex",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: "5%"
  },
  subtext:{ 
    display:"flex",
    fontSize: 14,
    fontWeight: "600",
    marginLeft: "5%",
    color: "grey"
  },
  subpic:{
    resizeMode: "contain",
    width: "100%",
    marginTop:"1%"
  },
  central: {
    display: "flex",
    backgroundColor: "#FF8B60",
    borderRadius: 50,
    width: "15%",
    aspectRatio: 1,
    marginTop: "-35%",
    elevation: 7,
    justifyContent: "center",
    alignItems: "center"
  },
  curpic:{
    width: "60%",
    resizeMode: "contain"
  },
  left: { 
    display: "flex",
    flexDirection: "row",
    width: "35%",
    aspectRatio: 3,
    marginTop: "-7%",
    marginLeft: "-60%",
    alignItems: "center",
    justifyContent: "space-around"
  },
  right: { 
    display: "flex",
    flexDirection: "row",
    width: "35%",
    aspectRatio: 3,
    marginTop: "-11.5%",
    marginLeft: "60%",
    alignItems: "center",
    justifyContent: "space-around"
  },
  icon:{
    display: "flex",
    width: "40%",
    height: "100%",
    justifyContent:"center",
    alignItems:"center"
  },
  iconpic: {
    resizeMode: "contain",
    width: "70%"
  },
  modal: {
    display : "flex", 
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems :"center"
  },
  cardclick:{
    height: "31%"
  },
  balance: {
    display: "flex",
    backgroundColor: "white",
    width: "90%",
    aspectRatio: 1.5,
    marginTop: "25%",
    marginLeft: "5%",
    alignItems: "center",
    borderRadius: 15,
    elevation: 7
  },
  close:{
    display: "flex",
    width: "50%",
    height: "20%",
    backgroundColor: "#FF8B60",
    borderRadius: 30,
    elevation: 10,
    marginTop: "18%",
    justifyContent: "center",
    alignItems: "center"
  },
  closetext: {
    fontSize: 18,
    color: "white",
    fontWeight: "700"
  },
  activity: {
    marginTop: "20%",
    size: "30"
  },
  balmain: {
    fontSize: 23,
    fontWeight: "400",
    marginTop: "-55%",
    marginLeft: "-60%"
  },
  balsub: {
    fontSize: 30,
    fontWeight: "600",
    marginLeft: "-43%",
    marginTop: "3%"
  }
});