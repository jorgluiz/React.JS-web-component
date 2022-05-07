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
                <h1>MEDICAL RECORDS</h1>
                <p>Articulation Association</p>
                <p>Residents' Social</p>
                <p>Merchants in the Neighborhood of Peixinhos - AASCMBP</p>
                <p> CNPJ: 19.007.800/0001-62 </p>
            </address>
            </header>
            <address>
                <h3>PATIENT DATA:</h3>
                <p> NAME: ${newData.name} </p>
                <p> BIRTH DATE: ${newData.nascimento}</p>
                <p> SEX: ${newData.sexo}</p>
                <p> MOTHER'S NAME: ${newData.mae}</p>
                <p> SUS CARD:  ${newData.sus}</p>
                <p> CPF: ${newData.cpf}</p>
                <p> RG: ${newData.rg} </p>
                <p> ISSUE DATE: ${newData.dataemissao}</p>
                <p> ZIP CODE: ${newData.cep}</p>
                <p> ADDRESS: ${newData.endereco}</p>
                <p>UF: ${newData.uf}</p>
                <p> CITY: ${newData.cidade}</p>
                <p>Neighborhood: ${newData.bairro}</p>
                <p> PHONE: ${newData.fone}</p>
                <h3>PATIENT INFORMATION</h3>
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
                                <h1>MEDICAL RECORDS</h1>
                                <p>Articulation Association</p>
                                <p>Residents' Social</p>
                                <p>Merchants in the Neighborhood of Peixinhos - AASCMBP</p>
                                <p> CNPJ: 19.007.800/0001-62 </p>
                            </address>
                            <span>
                                {/* <!--<img alt="it" src="base64imagecodehere" width="150">--> */}
                            </span>
                        </header>
                        <address>
                            <h3>PATIENT DATA:</h3>
                            <p> NAME: </p>
                            <p> BIRTH DATE:</p>
                            <p> SEX:</p>
                            <p> MOTHER'S NAME: </p>
                            <p> SUS CARD: </p>
                            <p> CPF: </p>
                            <p> RG: </p>
                            <p> ISSUE DATE:</p>
                            <p> ZIP CODE: </p>
                            <p> ADDRESS: </p>
                            <p> UF:</p>
                            <p> CITY:</p>
                            <p>Neighborhood: </p>
                            <p> PHONE: </p>
                            <h3>PATIENT INFORMATION:</h3>
                        </address>
                        <p className="information"><span></span></p>
                    </div>
                </div>
        </Layout >
    )
}

export default PdfPage