import React, { useContext } from "react";

import { DialogContext } from "../../pages/search";
import ButtonControl from "../controls/button"
import { putForm } from "../../utils/services/api";

import "./Dialog.css"

const ConfirmDialog = (props) => {
    const { confirmDialog, setConfirmDialog, data, setData, targetCpf } = useContext(DialogContext)

    // const { confirmDialog, setConfirmDialog } = props
    const getData = (cpf, dataForm) => {
        putForm(cpf, dataForm)
    }

    const handleSubmit = () => {
        getData(targetCpf, {
            ...data,
            name: data.name,
            sexo: data.sexo,
            nascimento: data.nascimento,
            mae: data.mae,
            cidade: data.cidade,
            bairro: data.bairro,
            cep: data.cep,
            endereco: data.endereco,
            descricao: data.descricao,
            dataemissao: data.dataemissao,
            rg: data.rg,
            sus: data.sus,
            uf: data.uf,
            fone: data.fone
        })

            setData({
            cpf: "",
            name: "",
            sexo: "",
            nascimento: "",
            mae: "",
            cidade: "",
            bairro: "",
            cep: "",
            endereco: "",
            descricao: "",
            dataemissao: "",
            rg: "",
            sus: "",
            uf: "",
            fone: ""
        })
        setConfirmDialog({ ...confirmDialog, isOpen: false })
    }

    return (
        <div className="container-dialog">
            <div className={`dialog ${confirmDialog.isOpen ? "active" : "inactive"}`}>

                <div>
                    {confirmDialog.title}
                </div>

                <div className="buttons">
                    <div className="button-no">
                        <ButtonControl
                            text="NO"
                            onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })} >
                        </ButtonControl>

                        <div className="button-yes">
                            <ButtonControl
                                text="YES"
                                onClick={handleSubmit}>
                            </ButtonControl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmDialog