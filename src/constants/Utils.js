import React from 'react';

export const reader = (file) => {
    return new Promise((resolve) => {
        const fileReader = new FileReader();
        fileReader.onload = () => resolve(fileReader.result);
        fileReader.readAsDataURL(file);
    })
}

export const readFile = (file) => {
    reader(file).then(result => {
        return result;
    });
}