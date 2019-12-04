import {MediaMatcher} from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  notifications = 5;
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  // navIcons = ["equalizer", "pie_chart", "people", "settings"]
  // fillerNav = {"Projects", "Completed Projects", "Workforce", "Settings"}

  fillerNav = [
                {'icon': 'equalizer', 'title': 'Tasks', 'link': 'taskM'},
                {'icon': 'timeline', 'title': 'Project Status', 'link': 'card'},
                {'icon': 'people', 'title': 'Workforce', 'link': 'workforceM'}]

  fillerContent = Array.from({length: 50}, () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);


  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);  
   }

  ngOnInit() {
    console.log('Project Id'+sessionStorage.getItem('pid'));

  }
  logout(){
    sessionStorage.removeItem('eid');
    sessionStorage.removeItem('useType');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('pid');
    sessionStorage.removeItem('tid');
    this.router.navigate(['login']);
  }


}