package trythis.animal;

public class Dog extends Animal implements Flyable {
	@Override
	public void walk() {
		System.out.println("Dog walk!!");
	}

	public void fly() {
		System.out.println("Dog Fly!!");
	}

}
