import {Link} from 'react-router-dom'

import React from "react";
import { motion } from 'framer-motion';

import Logo from "../assets/NuKenzieWhite.png";
import GroupImg from "../assets/group.png"
import { useParams } from "react-router-dom";

import './styles.css'

function HomePage() {
    const params = useParams();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            >
            <body>
                <main>
                    <div className="main-container">
                        <div className="main-container text">
                            <h1>Bem-vindo(a), {params.name}!</h1>
                            <img src={Logo} alt={Logo}/>
                            <h1>Centralize o controle das suas finanças</h1>
                            <span>de forma rápida e segura</span>
                            <Link to="/app"><button>Iniciar</button></Link>
                            <Link to="/"><button>Encerrar sessão</button></Link>
                        </div>

                        <div className="main-container image">
                            <img src={GroupImg} alt={GroupImg}/>
                        </div>

                    </div>
                </main>
            </body>
        </motion.div>
    )
}

export default HomePage;