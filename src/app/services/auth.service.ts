import { inject, Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  user,
} from '@angular/fire/auth';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = inject(Auth);

  signIn(email: string, password: string): Observable<any> {
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }

  signUp(
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ): Observable<any> {
    return from(
      createUserWithEmailAndPassword(this.auth, email, password).then(
        (userCredential) => {
          const user = userCredential.user;
          return updateProfile(user, {
            displayName: `${firstName} ${lastName}`,
          });
        }
      )
    );
  }

  getUser(): Observable<any> {
    return user(this.auth);
  }

  logOut() {
    return from(signOut(this.auth));
  }
}
