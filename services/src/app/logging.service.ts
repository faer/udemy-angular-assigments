/**
 * Created by Farouk Errahmani on 17/04/2017.
 */
export class LoggingService {

  logStatusChange(status: string) {
    console.log('A server status changed, new status: ' + status);
  }

}
