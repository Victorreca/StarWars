import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CloudinaryService {
  private cloudName = 'dwygcrj5r';
  private apiKey = '688794248684916';
  private apiSecret = 'xMHIDN_FkqVRHNbgownPtdKoRZY';
  private apiUrl = `https://api.cloudinary.com/v1_1/${this.cloudName}/resources/image`;

  constructor(private http: HttpClient) {}

  getImagesFromFolder(folder: string): Observable<any[]> {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(`${this.apiKey}:${this.apiSecret}`),
    });

    return this.http
      .get<{ resources: any[] }>(`${this.apiUrl}?prefix=${folder}/`, {
        headers,
      })
      .pipe(
        map((response) => {
          return response.resources.map((image) => ({
            number: this.extractNumber(image.public_id),
            url: image.url,
          }));
        })
      );
  }

  private extractNumber(publicId: string): string {
    const match = publicId.match(/^(\d+)_/);
    return match ? match[1] : '';
  }
}
