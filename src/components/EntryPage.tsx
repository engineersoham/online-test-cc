import { Grid, Typography, List, ListItem, ListItemButton, ListItemIcon, 
    Box, Select, InputLabel, FormControl, MenuItem, SelectChangeEvent, Button,  Table, TableRow, TableCell } from '@mui/material'
 import React from 'react'
 import { useNavigate } from 'react-router-dom';
 import StarIcon from '@mui/icons-material/Star';
 
 
 type Props = {
   setLanguage:any
 }
 
 const EntryPage: React.FC<Props> = ({ ...props }) => {
   const [language, setLanguage] = React.useState('');
   const navigate = useNavigate()
 
   const handleChange = (event: SelectChangeEvent) => {
     setLanguage(event.target.value);
   };
   const submit = () => {
       navigate('/quiz')
     props.setLanguage(language)
   }
   return (
 
     <Grid container sx={{ ml: 10 }}>
       
       <List
         sx={{ width: '100%', bgcolor: 'background.paper', mt: 10 }}
         aria-label="contacts"
       >
         <ListItem disablePadding>
           <ListItemButton>
             <ListItemIcon>
               <StarIcon />
             </ListItemIcon>
             <Typography>Select the language. then start the test.</Typography>
           </ListItemButton>
         </ListItem>
 
 
 
         <ListItem disablePadding>
           <ListItemButton>
             <ListItemIcon>
               <StarIcon />
             </ListItemIcon>
             <Typography>
               There are five Questions, One of each question will be of type: multiple choice, true/false, 
               fill-in the blanks, match the following and multi select.
             </Typography>
               
           </ListItemButton>
         </ListItem>
 
         <ListItem disablePadding>
           <ListItemButton>
             <ListItemIcon>
               <StarIcon />
             </ListItemIcon>
             <Typography>You can switch between questions.</Typography>
           </ListItemButton>
         </ListItem>
 
         <ListItem disablePadding>
           <ListItemButton>
             <ListItemIcon>
               <StarIcon />
             </ListItemIcon>
             <Typography>You can select the perticular question by clicking on the perticular question showing at left side of the page.</Typography>
           </ListItemButton>
         </ListItem>
 
         <ListItem disablePadding>
           <ListItemButton>
             <ListItemIcon>
               <StarIcon />
             </ListItemIcon>
             <Typography>Answered questions will be shown in green color and unanswered in grey color.</Typography>
           </ListItemButton>
         </ListItem>
 
         <ListItem disablePadding>
           <ListItemButton>
             <ListItemIcon>
               <StarIcon />
             </ListItemIcon>
             <Typography>Make sure that you save the current answer before moving to next question.</Typography>
           </ListItemButton>
         </ListItem>
 
       </List>
 
       <Box sx={{ mt: 15, ml: 80 }}>
         <FormControl >
           <InputLabel >Selact Language</InputLabel>
           <Table>
             <TableRow>
               <TableCell>
                 <Select
                   sx={{ width: 300, m: 2 }}
                   value={language}
                   onChange={handleChange}
                   defaultValue='Select'
                 >
                   <MenuItem value='English'>English</MenuItem>
                   <MenuItem value='Hindi'>Hindi</MenuItem>
                   <MenuItem value='Kannada'>Kannada</MenuItem>
                   
                    </Select>
               </TableCell>
               <TableCell>
                 <Button title='startTest' sx={{ width: 200, ml: 5 }} style={{ backgroundColor: 'rgb(18, 114, 209)', color: 'white' }} variant='outlined' onClick={submit}>Start Test</Button>
               </TableCell>
             </TableRow>
           </Table>
         </FormControl>
       </Box>
 
     </Grid>
   )
 }
 
 export default EntryPage