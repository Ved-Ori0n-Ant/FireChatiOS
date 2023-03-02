import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        // flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        backgroundColor: '#ffe5b4af'
    },
    heading: {
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    textInputContainer: {
        width: '85%',
        marginVertical: 4,
        alignSelf: 'center',
    },
    textInputContainerForPassword: {
        width: '40%',
        marginHorizontal: 7
    },
    inputText: {
        fontSize: 12,
        height: 35,
        fontWeight: '500'
    },
    errorText: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 10,
    },
    passwordContainerView: {
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    imagePickerContainer: {
        alignItems: 'flex-start', 
        justifyContent: 'center', 
        margin: 7, 
        flexDirection: 'column'
    },
    imagePickerButtonText: {
        color: '#ebe4ff', 
        height: 22,
    },
    imagePickerButton: {
        backgroundColor: 'black', 
        alignSelf: 'center', 
        width: '90%',
        marginTop: 7
    },
    datePickerContainer: {
        alignItems: 'flex-start', 
        justifyContent: 'center', 
        margin: 7, 
        flexDirection: 'column'
    },
    signinNavigator: {
        fontSize: 14,
        color: 'blue',
        alignSelf: 'center'
    }
})

export default styles