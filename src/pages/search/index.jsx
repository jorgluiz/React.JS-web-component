import React, { useState, createContext } from "react"

import Layout from "../../components/layout"
import ConfirmDialog from "../../components/confirmDialog"
import { searchCPF } from "../../utils/services/api"

import "./Search.css"

export const DialogContext = createContext()

const SearchPage = () => {
    const [data, setData] = useState({
        name: "",
        cpf: "",
        sexo: "",
        nascimento: "",
        mae: "",
        bairro: "",
        cep: "",
        endereco: "",
        descricao: "",
        dataemissao: "",
        rg: "",
        sus: "",
        uf: "",
        cidade: "",
        fone: "",
    })

    const getData = async (cpf) => {
        const response = await searchCPF(cpf)
        // set value form
        setData({
            cpf: response.data.cpf,
            name: response.data.name,
            sexo: response.data.sexo,
            nascimento: response.data.nascimento,
            mae: response.data.mae,
            cidade: response.data.cidade,
            bairro: response.data.bairro,
            cep: response.data.cep,
            endereco: response.data.endereco,
            descricao: response.data.descricao,
            dataemissao: response.data.dataemissao,
            rg: response.data.rg,
            sus: response.data.sus,
            uf: response.data.uf,
            fone: response.data.fone
        })
    }

    const handleSubmit = () => {

        if (data.cpf === "") return

        getData(data.cpf)

    }

    const targetCpf = data.cpf

    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: "" })
    // open confirm window 
    const handleUpForm = () => {
        if (data.cpf === "") return
        setConfirmDialog({
            isOpen: true,
            title: "Are you sure you want to edit the form?"
        })
    }

    return (
        <Layout>
            <DialogContext.Provider value={{ confirmDialog, setConfirmDialog, data, setData, targetCpf }}>
                <ConfirmDialog /> {/*props -> confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog}  */}
            </DialogContext.Provider>

            <form className="flex-row-form reset-form">
                <div className="flex1-form">

                    <label htmlFor="cpf">Enter the CPF to be consulted:</label>
                    <input className="search1" type="text" value={data.cpf} onChange={(e) => setData({ ...data, cpf: e.target.value })} placeholder="Enter the CPF to be consulted" />

                    <label htmlFor="full name">Full name:</label>
                    <input className="search2" type="text" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />

                    <label htmlFor="Date of birth">Date of birth:</label>
                    <input className="search3" type="text" value={data.nascimento} onChange={(e) => setData({ ...data, nascimento: e.target.value })} />

                    <label htmlFor="mother's name">Mother's name:</label>
                    <input className="search4" type="text" value={data.mae} onChange={(e) => setData({ ...data, mae: e.target.value })} />

                    <label htmlFor="Neighborhood">Neighborhood:</label>
                    <input className="search5" type="text" value={data.bairro} onChange={(e) => setData({ ...data, bairro: e.target.value })} />

                    <label htmlFor="Zip code">Zip code:</label>
                    <input className="search6" type="text" value={data.cep} onChange={(e) => setData({ ...data, cep: e.target.value })} maxlength="9" />

                    <label htmlFor="Address">Address:</label>
                    <input className="search7" type="text" value={data.endereco} onChange={(e) => setData({ ...data, endereco: e.target.value })} />

                    {/* <!-- textarea --> */}
                    <label htmlFor="Description">Description:</label>
                    <textarea className="search8" value={data.descricao} onChange={(e) => setData({ ...data, descricao: e.target.value })} cols="30" rows="10"
                        style={{ resize: "none" }}></textarea>
                </div>

                <div className="flex2-form">
                    <label htmlFor="Sex">Sex:</label>
                    <input className="search9" type="text" value={data.sexo} onChange={(e) => setData({ ...data, sexo: e.target.value })} />

                    <label htmlFor="Issue date">Issue date:</label>
                    <input className="search9" type="text" value={data.dataemissao} onChange={(e) => setData({ ...data, dataemissao: e.target.value })} />

                    <label htmlFor="RG">RG:</label>
                    <input className="search10" type="text" value={data.rg} onChange={(e) => setData({ ...data, rg: e.target.value })} />


                    <label htmlFor="sus card">SUS card:</label>
                    <input className="search11" type="text" value={data.sus} onChange={(e) => setData({ ...data, sus: e.target.value })} />

                    <label htmlFor="City">City:</label>
                    <input className="search12" type="text" value={data.cidade} onChange={(e) => setData({ ...data, cidade: e.target.value })} />

                    <label htmlFor="uf">UF:</label>
                    <input className="search13" type="text" value={data.uf} onChange={(e) => setData({ ...data, uf: e.target.value })} />

                    <label htmlFor="phone">Phone:</label>
                    <input className="search14" type="text" value={data.fone} onChange={(e) => setData({ ...data, fone: e.target.value })} />


                </div>
            </form>
            {/* <!-- button submit --> */}
            <div className="flex3-submit">
                <button type="search-btn1" onClick={handleSubmit}>searches</button>
                <button type="search-btn2" onClick={handleUpForm}>update</button>
            </div>
        </Layout>
    )
}

export default SearchPage