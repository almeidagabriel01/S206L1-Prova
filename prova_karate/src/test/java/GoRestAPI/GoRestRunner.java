package GoRestAPI;

import com.intuit.karate.junit5.Karate;

public class GoRestRunner {
  
  @Karate.Test
  Karate testPoke() {
    return Karate.run("GoRest").relativeTo(getClass());
  }
}