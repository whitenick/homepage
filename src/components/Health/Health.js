import React, { useState } from 'react';
import { Base64 } from 'js-base64';
import {
    Container,
    Grid,
    Paper,
    Button
} from '@material-ui/core';
import './Health.scss';
import { backend } from '../../constants/Constants';
import {DropzoneArea} from 'material-ui-dropzone';
import { reader } from '../../constants/Utils';

export const Health = () => {
    const [image, setImage] = useState();
    const [results, setResults] = useState();

    const onSetImage = (image) => {
        setImage(image);
    }

    const submitImage = async () => {
        if (image) {
            var promiseArr = [];
            image.forEach(f => {
                promiseArr.push(reader(f));
            })
            var maps = [];
            await Promise.all(promiseArr).then(result => {
                maps.push(result);
            });
            fetch(backend + 'image-submit', {
                method: 'POST',
                body: JSON.stringify({
                    Ingredients: ['peanuts'],
                    Images: maps.flat()
                })
            }).then(async (resp) => {
                setResults(await resp.json())
            }).catch((ex) => {
                throw(ex);
            })
        }
    }

    return (
        <Container>
            <Grid container justify='center' spacing={1}>
                <Grid item xs={12} className='health-landing'>
                    <DropzoneArea dropzoneText='Drag and Drop or Upload Ingredient List' onChange={(file) => onSetImage(file)} />
                </Grid>
                <Grid item xs={12} justify='center'>
                    <div className='health-button'>
                        <Button variant='contained' onClick={() => submitImage()}>Save</Button>
                    </div>
                </Grid>
                <Grid item xs={12} justify='center'>
                    <Paper className='result-paper' variant='outlined'>{results}</Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Health;