import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyInformationsService {

  public mock = [{
    artist: 'Metallica',
    albuns: [
      {
        name: 'Black Album',
        year: '1990',
        language: 'english',
        songs: [{
          position: '1',
          name: 'Enter Sandman',
          time: '5:31',
        },
        {
          position: '2',
          name: 'Sad but True"',
          time: '5:23',
        },
        {
          position: '3',
          name: 'Holier Than Thou',
          time: '3:48',
        },
        {
          position: '4',
          name: 'The Unforgiven',
          time: '6:27',
        },
        {
          position: '5',
          name: 'Wherever I May Roam',
          time: '6:46',
        },
        {
          position: '6',
          name: 'Don t Tread on Me',
          time: '4:01',
        },
        {
          position: '7',
          name: 'Through the Never',
          time: '4:03',
        },
        {
          position: '8',
          name: 'Nothing Else Matters',
          time: '6:29',
        },
        {
          position: '9',
          name: 'Of Wolf and Man',
          time: '4:17',
        },
        {
          position: '10',
          name: 'The God That Failed',
          time: '5:05',
        },
        {
          position: '11',
          name: 'My Friend of Misery"',
          time: '6:50',
        },
        {
          position: '12',
          name: 'The Struggle Within',
          time: '3:54',
        },
        ]
      }
    ]
  },
  {
    artist: 'Michael jackson',
    albuns: [
      {
        name: 'Black Album',
        year: '1990',
        language: 'english',
        songs: [{
          position: '1',
          name: 'Don t Stop Til You Get Enough',
          time: '6:05',
        },
        {
          position: '2',
          name: 'Rock with You',
          time: '3:40',
        },
        {
          position: '3',
          name: 'Workin Day and Night',
          time: '5:14',
        },
        {
          position: '4',
          name: 'Get on the Floor',
          time: '4:39',
        },
        {
          position: '5',
          name: 'Off the Wall"',
          time: '4:06',
        },
        {
          position: '6',
          name: 'Girlfriend',
          time: '3:05',
        },
        {
          position: '7',
          name: 'She s Out of My Life',
          time: '3:38',
        },
        {
          position: '8',
          name: 'I Can t Help It',
          time: '4:29',
        },
        {
          position: '9',
          name: 'Its the Falling in Love',
          time: '3:48',
        },
        {
          position: '10',
          name: 'Burn This Disco Ou',
          time: '3:40',
        }]
      }
    ]}];

  public getInformations(): Observable<any> {
    return of(this.mock);
  }
}
