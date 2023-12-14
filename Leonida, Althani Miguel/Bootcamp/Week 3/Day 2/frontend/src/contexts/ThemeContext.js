import {createContext, Component} from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = {
        isLightTheme: true, 
        light: {syntax: '#555', bg: '#eee'},
        dark: {syntax: '#ddd', bg: '#555'}
    }
    render() {
        return(
            <ThemeContext.Provider value={{...this.state}}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvider;