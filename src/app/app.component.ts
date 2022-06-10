import { NotificationService } from './services/notification/notification.service';
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import {AuthService} from "./services/auth/auth.service";
import {UiService} from "./services/ui/ui.service";
import { Plugins, registerWebPlugin, StatusBarStyle, Capacitor } from '@capacitor/core';
import { FacebookLogin } from '@capacitor-community/facebook-login';
const { StatusBar, SplashScreen, Share, Browser, Network, LocalNotifications } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(private platform: Platform,
              private uiService: UiService,
              private authService : AuthService,
              private notifService: NotificationService) {

    this.initializeApp();
    registerWebPlugin(FacebookLogin);
    this.notifService.requestPermission()
    Network.addListener('networkStatusChange', (status) => {
      if(status.connected)
        this.uiService.presentToast('Connexion réseau établie avec succès', 'success',5000)
      else
        this.uiService.presentToast('La connexion réseau a été perdue', 'danger',5000)
    })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      if(Capacitor.isPluginAvailable('StatusBar')){
        StatusBar.setStyle({style: (document.body.getAttribute('color-theme') === 'dark') ? StatusBarStyle.Dark : StatusBarStyle.Light});
        StatusBar.show()
      }
      if(Capacitor.isPluginAvailable('SplashScreen')){
        SplashScreen.hide();
      }
    });
  }

  logout(){
    this.authService.logout();
  }

  async openBrowser(url : string) {
    await Browser.open({ url: url });
  }

  async shareToApps(){
    let share = await Share.share({
      title: 'AN BIKO : une application todolist partagée',
      text: 'Application vraiment géniale que vous devez voir maintenant',
      url: 'https://github.com/chouaibMo/ionic-todolist-app',
      dialogTitle: 'Partagez avec vos amis'
    });
  }
}
