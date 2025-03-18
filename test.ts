const [images, setImages] = useState<string[]>([]);
  const imageRef = useRef<HTMLInputElement>(null);
  
const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files![0].size > 1024 * 1024) {
      imageRef.current!.value = "";
      toast.error(
        "Image size is too big! You can only upload images up to 1MB."
      );
      return;
    } else {
      if (i.length >= 3) {
        toast.error("You can only upload up to 3 images per review.");
        return;
      }
      const files = e.target.files;
      if (files !== null) {
        const file = files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = function (e) {
            if (e.target) {
              setImages([...images, e.target.result as string]);
            }
          };
          reader.readAsDataURL(file);
        }
        setI([...i, files[0]]);
      }
    }
  };


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const conflict = await reviewConflict(product_id, user?.sub as string);
    if (conflict) {
      setReview("");
      setImages([]);
      toast.warning(
        "You have already reviewed this product! Users can only review product once."
      );
      return;
    }
    if (review.length > 0) {
      toast.info("Adding review...");
      let imageBlobs = [];
      if (i.length !== 0) {
        imageBlobs = await Promise.all(
          i.map(async (img) => {
            const res = await fetch(
              ${process.env.NEXT_PUBLIC_URL}api/image/upload?filename=${img.name},
              {
                method: "POST",
                body: img,
              }
            );
            const data = await res.json();
            return data.url;
          })
        );
        setImages([]);
      }
      const newReview = await addProductReview(
        product_id,
        user?.sub as string,
        imageBlobs!,
        review
      );

      setReviews([{ ...newReview, upvotes: 0 }, ...reviews]);
      setReview("");
      toast.success("New review added!");
    } else {
      toast.warning("You can't write an empty review");
    }
  };