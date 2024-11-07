package trythis.bookstore;

public class Author {
	private String name;
	private String email;
	private String gender;

	public Author(String name, String email, String gender) {
		this.name = name;
		this.email = email;
		this.gender = gender;
	}

	public String getName() {
		return name;
	}

	public String getEmail() {
		return email;
	}

	public String getGender() {
		return gender;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	@Override
	public String toString() {
		return "Author[name='%s', email='%s', gender='%s']".formatted(name, email, gender);
	}
}
