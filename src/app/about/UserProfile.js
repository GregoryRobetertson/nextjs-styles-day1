'use client';
import React from 'react';
import Usercard from '../styles/UserProfile.module.scss';


export default function UserProfile({ name, bio, hobby }) {
    return (
        <div>
            
            <div className={Usercard['user-card']}>
                <h2 className='user-card__name'>{name}</h2>
                <p className='user-card__bio'>{bio}</p>
                <p className='user-card__hobby'>{hobby}</p>
            </div>
        </div>
    );
}
