import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { initializeApp,FirebaseApp } from "firebase/app";
import { Auth, getAuth } from 'firebase/auth';
import { Config } from 'src/dto/config.model';
import {CollectionReference, Firestore, collection, getFirestore} from 'firebase/firestore'



@Injectable()
export class FirebaseService {
    public app: FirebaseApp;
    public auth: Auth;
    public fireStore: Firestore;

    public usersCollection: CollectionReference;

    constructor(private configService: ConfigService<Config>) {
        this.app = initializeApp({
          apiKey: configService.get<string>('apiKey'),
          authDomain: configService.get<string>('authDomain'),
          projectId: configService.get<string>('projectId'),
          storageBucket: configService.get<string>('storageBucket'),
          messagingSenderId: configService.get<string>('messagingSenderId'),
          appId: configService.get<string>('appId'),
        });


        this.auth = getAuth(this.app);
        this.fireStore = getFirestore(this.app);
        this._createCollections();
    }   
    private _createCollections(){
        this.usersCollection = collection(this.fireStore, 'users');
    }
}
