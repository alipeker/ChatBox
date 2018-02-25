package SportCenter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class Main {

	@RequestMapping(value = "/home")
	public ModelAndView setting(HttpServletRequest request, HttpServletResponse response){
		ModelAndView modelAndView;
		modelAndView = new ModelAndView("index");
		modelAndView.addObject("test", "javadan gelen yer");
		return modelAndView;
	}

}
