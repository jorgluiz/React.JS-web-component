import React, { useState } from "react";
import { useRef } from "react";
import 'font-awesome/css/font-awesome.min.css'

import Layout from "../../components/layout"
import { searchPDF } from "../../utils/services/api";
import ClientsPDF from "../../components/reports/clients"

import "./PdfPage.css"

const PdfPage = () => {
    const [inputValue, setInputValue] = useState('')
    const [response, setResponse] = useState()
    const containerRef = useRef()
    let htmlRef = containerRef.current
    let output = ""

    const organizeForm = async (inputValue) => {
        const response = await searchPDF(inputValue) // searchPDF API
        const dataArr = [response.data]
        dataArr.forEach(newData => {
            output += `
             <header>
             <address>
                <h1>REGISTROS MÉDICOS</h1>
                <p>Associação de Articulação</p>
                <p>Social dos Residentes</p>
                <p>Comerciantes do Bairro de Peixinhos - AASCMBP</p>
                <p> CNPJ: 19.007.800/0001-62 </p>
            </address>
            </header>
            <address>
                <h3>PATIENT DATA:</h3>
                <p> Nome: ${newData.name} </p>
                <p> Data de nascimento: ${newData.nascimento}</p>
                <p> Sexo: ${newData.sexo}</p>
                <p> Nome mãe: ${newData.mae}</p>
                <p> Cartão SUS:  ${newData.sus}</p>
                <p> CPF: ${newData.cpf}</p>
                <p> RG: ${newData.rg} </p>
                <p> Data de emissão: ${newData.dataemissao}</p>
                <p> Código postal: ${newData.cep}</p>
                <p> Logradouro: ${newData.endereco}</p>
                <p> UF: ${newData.uf}</p>
                <p> Cidade: ${newData.cidade}</p>
                <p> Bairro: ${newData.bairro}</p>
                <p> Telefone: ${newData.fone}</p>
                <h3> Informação do paciente</h3>
            </address>
            <p className="information"><span>${newData.descricao.substring(0, 100) + "..."}</span></p>
    `
        })
        htmlRef.innerHTML = output // containerRef.current
        setResponse(response.data)
        // ClientsPDF(response.data) // function generatorPDF
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // call function
        organizeForm(inputValue)
    }

    return (
        <Layout>
            <div className="container-pdf">
                <form onSubmit={handleSubmit}>
                    <input className="input-pdf" type="text" onChange={(e) => setInputValue(e.target.value)} placeholder="&#xF002; Search for CPF" />
                </form>
                <ClientsPDF responseData={response} />
            </div>

            <div className="container-pdf-form">
                <div ref={containerRef}>
                    <header>
                        <address>
                            <h1>REGISTROS MÉDICOS</h1>
                            <p>Associação de Articulação</p>
                            <p>Social dos Residentes</p>
                            <p>Comerciantes do Bairro de Peixinhos - AASCMBP</p>
                            <p> CNPJ: 19.007.800/0001-62 </p>
                        </address> 
                        <span>
                            {/* <!--<img alt="it" src="base64imagecodehere" width="150">--> */}
                        </span>
                    </header>
                    <address>
                        <h3>Dados do paciente:</h3>
                        <p> Nome: </p>
                        <p> Data de Nascimento:</p>
                        <p> Sexo:</p>
                        <p> Nome da mãe: </p>
                        <p> Cartão SUS: </p>
                        <p> CPF: </p>
                        <p> RG: </p>
                        <p> Data de emissão:</p>
                        <p> Código postal: </p>
                        <p> Logradouro: </p>
                        <p> UF:</p>
                        <p> Cidade:</p>
                        <p> Bairro: </p>
                        <p> Telefone: </p>
                        <h3> Informação do paciente:</h3>
                    </address>
                    <p className="information"><span></span></p>
                </div>
            </div>
        </Layout >
    )
}

export default PdfPage