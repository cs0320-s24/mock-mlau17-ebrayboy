import { Dispatch, SetStateAction, useState } from 'react';

interface REPLFunction{
    csvNametoData: string|string[][]
    setcsvNametoData: Dispatch<SetStateAction<string|string[][]>>
}

export function REPLFunction(props: string){
    const [filePath, setfilePath] = useState<string>('')
    const [csvData, setcsvData] = useState<string[][]>([])
    const [columnName, setcolumnName] = useState<string>('')
    const [columnIndex, setcolumnIndex] = useState<number>(0)
    const [value, setValue] = useState<string>('')

    
    function loadCSV(filePath:string) {
    }

    function viewCSV(csvData:string[][]) {
        
    }

    function searchCSV(columnName:string, value: string) {
        
    }

return (
    <div className="repl-function">
    </div>
);

}