import React from 'react'
import ContractNoteInputForm from '../../components/panel/contractNote/ContractNoteInputForm'
import { Button, Container, Typography } from '@mui/material'
import { useSelector,useDispatch } from 'react-redux'
import { createContractNote, fetchContractNotes } from '../../store/slices/contractNoteSlice'
import ContractNotesTable from '../../components/panel/contractNote/ContractNotesTable'
export default function Offser() {
    const newContractNote = useSelector(state => state.contractNote.newContractNote)
    const contractNotes = useSelector(state => state.contractNote.contractNotes)
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(fetchContractNotes());
    }, [])
    return (
        <Container>
            <Typography variant="h4">ContractNote</Typography>
            <ContractNoteInputForm/>
            <Button onClick={()=>{
                dispatch(createContractNote(newContractNote));
                dispatch(fetchContractNotes());
            }} sx={{marginTop:'10px'}} fullWidth variant="contained" color="warning">Create ContractNote</Button>
            <ContractNotesTable contractNotes={contractNotes} />
        </Container>
    )
}
