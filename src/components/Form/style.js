import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext:{
        flex: 1,
        backgroundColor:"#ffffff",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        alignContent:"center",
        paddingTop:30,   
    },
    form:{
        width:"100%" ,
    },
    formLabel:{
        color: "#000000",
        fontSize:18,
        paddingLeft:20,
    },
    input:{
        width: "90%",
        height: 40,
        margin: 12,
        paddingLeft:10,
        borderRadius:50,
        backgroundColor:"#f6f6f6",
    },
    buttonCalculator:{
       borderRadius:50,
       alignItems:"center",
       justifyContent:"center",
       width:"90%",
       backgroundColor:"#c00f0f",
       paddingTop:14,
       paddingBottom:14,
       marginLeft:12,
       marginTop:30,
    },
    textButtonCalculator:{
        fontSize:20,
        color: "#ffffff",
    },
    errorMessage:{
        fontSize:12,
        color: "red",
        fontWeight:"bold",
        paddingLeft:20,
    },
    exhibitionResultImc:{
        width: "100%",
        height: "50%",
    },
    listImcs:{
        marginTop:60, 
        marginLeft:40, 
    },
    resultImcItem:{
        fontSize:28,
        color: "#e02222",
        height:50,
        width: "100%",
        paddingRight:20,
    },
    textResultItemList:{
        fontSize:16,
        color: "#e02222",
    },
});

export default styles;