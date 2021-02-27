import { createAppContainer, createSwitchNavigator } from "react-navigation"
import MainScreen from "../components/MainScreen"

const AppStackNavigator = createSwitchNavigator({
    Main: {
        screen: MainScreen
    }
});

export default createAppContainer(AppStackNavigator);