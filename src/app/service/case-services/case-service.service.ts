import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL, DELETE_CASE_DETAILS, FIND_ALL_CASE_DETAILS, FIND_CASE_DETAILS, SAVE_CASE_DETAILS, UPDATE_CASE_DETAILS } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class CaseServiceService {

  constructor(private http:HttpClient) { }

  createCaseDetails(caseDetails: object): Observable<any>
  {
    return this.http.post(
      `${API_URL}/${SAVE_CASE_DETAILS}`
        , caseDetails);
  }

  updateCase(caseId:number, status:string): Observable<any>
  {
    const url = `${API_URL}/${UPDATE_CASE_DETAILS}/${caseId}/${status}`;
    const body = { status };

    return this.http.patch(url, body);
    
  }


  findCaseById(caseId:number): Observable<any>
  {
    return this.http.get(
      `${API_URL}/${FIND_CASE_DETAILS}/${caseId}`);
  }

  findAllCases(): Observable<any>
  {
    return this.http.get(
      `${API_URL}/${FIND_ALL_CASE_DETAILS}`);
  }

  deleteCaseDetails(caseId:number): Observable<any>
  {
    return this.http.delete(
      `${API_URL}/${DELETE_CASE_DETAILS}/${caseId}`);
  }

}
