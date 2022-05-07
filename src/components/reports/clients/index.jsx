import pdfMake from "pdfmake/build/pdfmake"
import pdfFonts from "pdfmake/build/vfs_fonts"

const ClientsPDF = (props) => {
    const { responseData } = props
    if(responseData === undefined) return
    pdfMake.vfs = pdfFonts.pdfMake.vfs

    //reportTitle
    const reportTitle = [{
        text: "Form",
        fontSize: 15,
        bold: true,
        alignment: "center",
        margin: [15, 20, 0, 45] // left, top, right, bottom
    }]

    //details
    const details = [{
        columns: [
            {
                fontSize: 30,
                width: 'auto',
                text: 'MEDICAL RECORDS'
            }
        ]
    },
    { text: 'Articulation Association', margin: [0, 10, 0, 0,] },
    { text: "Residents' Social", margin: [0, 5, 0, 0,] },
    { text: 'Merchants in the Neighborhood of Peixinhos - AASCMBP', margin: [0, 5, 0, 0,] },
    { text: 'CNPJ: 19.007.800/0001-62', margin: [0, 5, 0, 0,] },

    {
        columns: [
            {
                margin: [0, 10, 0, 0,],
                fontSize: 20,
                text: 'MEDICAL RECORDS'
            }
        ]
    },
    { text: responseData.name, margin: [0, 10, 0, 0,] },
    { text: responseData.nascimento, margin: [0, 5, 0, 0,] },
    { text: responseData.sexo, margin: [0, 5, 0, 0,] },
    { text: responseData.mae, margin: [0, 5, 0, 0,] },
    { text: responseData.sus, margin: [0, 5, 0, 0,] },
    { text: responseData.cpf, margin: [0, 5, 0, 0,] },
    { text: responseData.rg, margin: [0, 5, 0, 0,] },
    { text: responseData.dataemissao, margin: [0, 5, 0, 0,] },
    { text: responseData.cep, margin: [0, 5, 0, 0,] },
    { text: responseData.endereco, margin: [0, 5, 0, 0,] },
    { text: responseData.uf, margin: [0, 5, 0, 0,] },
    { text: responseData.cidade, margin: [0, 5, 0, 0,] },
    { text: responseData.bairro, margin: [0, 5, 0, 0,] },
    { text: responseData.fone, margin: [0, 5, 0, 0,] },
    { text: responseData.descricao, margin: [0, 5, 0, 0,] },
    ]

    //footer
    const footer = (currentPage, pageCount) => {
        return [{
            text: currentPage + ' / ' + pageCount,
            alignment: "right",
            fontSize: 15,
            margin: [0, 10, 20, 0] // left, top, right, bottom
        }]
    }

    // ###   document definition   ###
    const docDefinition = {
        pageSize: "A4",
        pageMargins: [15, 50, 15, 40],

        header: [reportTitle],

        content: [details],

        footer: footer
    }

    //function generator PDF
    const generatorPDF = () => {
        pdfMake.createPdf(docDefinition).print()
    }

    return <button className="btn-generator" onClick={generatorPDF}>generator</button>

}

export default ClientsPDF