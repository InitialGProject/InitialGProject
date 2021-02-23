import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class GlobalVars {
    private globalToken:string;
    private globalUser:string;
    private globalUserToken:object;

//--------------------------------------------------------
    setglobalUserToken(currentToken:object) {
      this.globalUserToken = currentToken;
    }

    getglobalUserToken():object{
        return this.globalUserToken;
    }
    //--------------------------------------------------------

    setGlobalToken(currentToken:string) {
      this.globalToken = currentToken;
    }

    getGlobalToken():string{
        return this.globalToken;
    }

    setGlobalUser(currentUser:string) {
        this.globalUser = currentUser;
    }
  
    getGlobalUser():string{

        return this.globalUser;
    }
}