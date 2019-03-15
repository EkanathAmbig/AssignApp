import React, {Component} from 'react';
import {Text, View,Dimensions,FlatList,StyleSheet,Button} from 'react-native';
import { connect } from 'react-redux';

const {height,width} = Dimensions.get('window');
class DashBoard extends Component {
    static navigationOptions =  ({ navigation }) =>{
       return{
        title: 'Employee List',
        headerStyle: {
              backgroundColor: '#4527a0',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
        headerRight: (
              <Button
                onPress={() => navigation.navigate('Home')}
                title="LogOut"
                color="#841584"
              />
            ),
        };
      };

    constructor(props){
        super(props);
        this.state={
            username: '',
            pass: '',
            error: ''
    }
}

    renderListData = ({item}) => {
        return (
            <View style={styles.tableContentView}>
                <Text style={[styles.tableHeaderText,styles.tableText,{flex:0.5,fontWeight: 'normal'}]}>{item.id}</Text>
                <Text style={[styles.tableHeaderText,styles.tableText]}>{item.name}</Text>
                <Text style={[styles.tableHeaderText,styles.tableText,{flex:0.7}]}>{item.age}</Text>
                <Text style={[styles.tableHeaderText,styles.tableText,{flex:1.5}]}>{item.gender}</Text>
                <Text style={[styles.tableHeaderText,styles.tableText]}>{item.email}</Text>
                <Text style={[styles.tableHeaderText,styles.tableText]}>{item.phoneNo}</Text>
            </View>
            );
    }

    renderHeaderData = () =>{
        return (
            <View style={styles.tableHeaderView}>
                <Text style={[styles.tableHeaderText,{flex:0.5}]}>ID</Text>
                <Text style={styles.tableHeaderText}>Name</Text>
                <Text style={[styles.tableHeaderText,{flex:0.7}]}>Age</Text>
                <Text style={[styles.tableHeaderText,{flex:1.5}]}>Gender</Text>
                <Text style={styles.tableHeaderText}>Email</Text>
                <Text style={styles.tableHeaderText}>Phone No.</Text>
            </View>
        );
    }

    render() {
//        alert(this.props.details.employeelist.user)
        return (
          <View style={{flex:1,justifyContent: 'flex-start',alignItems:'center',backgroundColor:'#ffffff'}}>
            <Text></Text>
            <FlatList
                data = {this.props.details.employeelist.user}
                renderItem = {this.renderListData}
                keyExtractor = {(item, index) => item.id.toString() }
                extraData = {this.state}
                ListHeaderComponent = { this.renderHeaderData}
            />

          </View>
        );
    }
}

const mapStateToProps = ({details}) => ({details});
export default connect (mapStateToProps,null) (DashBoard);

const styles = StyleSheet.create({
    tableHeaderView: {
        height: height*0.05,
        width: width,
        backgroundColor: '#2196f3',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ffffff',
        borderWidth: 0.5,
    },
    tableHeaderText: {
        color: '#ffffff',
        flex: 2,
        height: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    tableContentView: {
        borderColor: '#ffffff',
        borderWidth: 0.5,
        width: width,
        backgroundColor: '#e3f2fd',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tableText: {
        color: '#111111',
        fontWeight: 'normal'
    },
});


const empData = {
                user:[{
                "id":1,
                "name":"test1",
                "age" : "11",
                "gender":"male",
                "email" : "test1@gmail.com",
                "phoneNo" : "9738452245"
                },
                {
                "id" : 2,
                "name":"test2",
                "age" : "12",
                "gender":"male",
                "email" : "test2@gmail.com",
                "phoneNo" : "9738452245"
                },
                {
                "id":3,
                "name":"test3",
                "age" : "13",
                "gender":"male",
                "email" : "test3@gmail.com",
                "phoneNo" : "9738452245"
                },
                {
                "id":4,
                "name":"test4",
                "age" : "14",
                "gender":"male",
                "email" : "test4@gmail.com",
                "phoneNo" : "9738452245"
                },
                {
                "id":5,
                "name":"test5",
                "age" : "15",
                "gender":"male",
                "email" : "test5@gmail.com",
                "phoneNo" : "9738452245"
                },
                {
                "id":6,
                "name":"test6",
                "age" : "16",
                "gender":"male",
                "email" : "test6@gmail.com",
                "phoneNo" : "9738452245"
                }
                ]
                }
