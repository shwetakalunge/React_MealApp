
import React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';


const CategoryMealScreen=props=>{
        return(
            <View styles={styles.screen}>
                <Text>The Category Meal Screen</Text>
                <Button title="Go to MealDetailScreen" onPress={()=>{
                    props.navigation.navigate({routeName:'MealDetail'});
                }}/>
            
            <Button title="Go Back" onPress={()=>{
                props.navigation.goBack();
            }}/>

            </View>
        );
        };


const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});


export default CategoryMealScreen;