import react, {Component} from 'react';
import { Text } from 'react';
import loginStyles from '../styles/colors';
import MyTextInput from '../components/MyTextInput';
 



export default function LoginScreen (){
    const [hidePassword, setHidePassword ] = useState(false)    
    return (
            
            <View style={[loginStyles.container]}>
                
                <statusBar backgroundColor={color.BLUE} traslucent={true}/>
            
                <MyTextInput keyboardType='email-address' placeholder='Email' image='user'/>
                <MyTextInput keyboardType={null} placeholder='Contraseña' image='lock' bolGone={true} secureTextEntry={hidePassword} onPress={()=> setHidePassword(!hidePassword)} />
                <View style={loginStyles.btnMain}>
                    <TouchableOpacity>
                        <Text style={[loginStyles.btntxt,]}>Iniciar sesion</Text>
                    </TouchableOpacity>
                 </View>
                 <View style={loginStyles.btnMain}>
                    <TouchableOpacity>
                        <Text style={[loginStyles.btntxt, {color:color.BLUE}]}>Registrarse</Text>
                    </TouchableOpacity>
                 </View>





                 </View>

                 

            
            
        )
    }


