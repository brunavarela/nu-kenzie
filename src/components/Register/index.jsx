import './styles.css'

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useHistory } from "react-router-dom";
import { useState } from "react";

import { motion } from 'framer-motion';

import Logo from "../assets/NuKenzieWhite.png"

const Register = () => {
    const [user, setUser] = useState([])
    const history = useHistory();

    const schema = yup.object().shape({
        name: yup
          .string()
          .required("Por favor, insira seu nome.")
          .min(2, "Mínimo de 2 caracteres" ),
        lastName: yup
          .string()
          .required("Por favor, insira seu sobrenome.")
          .min(2, "Mínimo de 2 caracteres" ), 
        email: yup
          .string()
          .required("Por favor, insira seu email.")
          .email("Email inválido."),
        password: yup 
           .string()
           .required("Por favor, insira sua senha.")
           .min(8, "Mínimo de 8 caracteres")    
           .matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])(?=.*[0-9])[0-9a-zA-Z$*&@#]{8,}$/,
            "Sua senha precisa conter ao menos 1 letra maiúscula, 1 letra minúscula, 1 caractere especial e 1 número."
            ),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref("password")], "A senha deve ser igual a anterior."),

    });

    const onRegister = (data) => {
        if(user) {
          setUser([...user, data])
          history.push(`/home/${data.name}`)
        } 
      }

    const { 
        register, 
        handleSubmit, 
        formState: { errors }, 
    } = useForm({ resolver: yupResolver(schema) });

    
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
         >
            <div className="mainRegisterContainer">
                <form onSubmit={ handleSubmit(onRegister)} className="registerContainer">
                    <div className="registerContainer header">
                        <h3>Registro</h3>
                        <img src={Logo} alt={Logo}/>
                    </div>
                    <div className="registerContainer form">
                        <h4>Nome</h4>
                        <input type="text"
                        {...register("name")}
                        />
                        <p className="registerContainer form errors">
                            {errors.name?.message}
                        </p>

                        <h4>Sobrenome</h4>
                        <input type="text" 
                        {...register("lastName")}
                        />
                        <p className="registerContainer form errors">
                            {errors.lastName?.message}
                        </p>

                        <h4>Email</h4>
                        <input type="text"  
                        {...register("email")}
                        />
                        <p className="registerContainer form errors">
                            {errors.email?.message}
                        </p>

                        <h4>Senha</h4>
                        <input type="password" 
                        {...register("password")}
                        />
                        <p className="registerContainer form errors">
                            {errors.password?.message}
                        </p>

                        <h4>Confirmar senha</h4>
                        <input type="password" 
                        {...register("confirmPassword")}
                        />
                        <p className="registerContainer form errors">
                            {errors.confirmPassword?.message}
                        </p>
                    </div>

                    <div className="registerContainer button">
                        <button  type="submit">Cadastrar</button>   
                    </div>
                </form>
            </div>
        </motion.div>
    )

}

export default Register