// Tarefa 14/10-17/10
let turmaCodeLab = [
    {nome: "Flávio", 
    funcao: "Professor"
    },
    {nome: "Ítalo",
    funcao: "Professor"
    },
    {nome: "Samuel",
    funcao: "Professor"
    },
    {nome: "Moisés",
    funcao: "Professor"
    },
    {nome: "Railson",
    funcao: "Professor"
    },
    {nome: "Abner Levi",
    funcao: "Aluno"
    },
    {nome: "Jadson",
    funcao: "Aluno"
    },
    {nome: "Diogo",
    funcao: "Aluno (E funcionário infiltrado)"
    },
    {nome: "Mathews",
    funcao: "Aluno"
    },
    {nome: "João",
    funcao: "Aluno"
    },
    {nome: "Ryan",
    funcao: "Aluno"
    },
    {nome: "Thales",
    funcao: "Aluno"
    },
]

function turma(turmaCodeLab){
    for(let y = 0; y < turmaCodeLab.length; y++){
    setTimeout(() => {
    console.log(`${turmaCodeLab[y].nome} ............ ${turmaCodeLab[y].funcao}`)
    }, (y + 1) * 1000);
}

    setTimeout(() => {
    console.log("FIM")
    }, (turmaCodeLab.length + 2) * 1000)
    }
// turma(turmaCodeLab)